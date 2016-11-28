<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Songs extends CI_Controller {

    public function __construct(){
        parent:: __construct();

        $post = file_get_contents('php://input');
        $_POST =json_decode($post, true);

        $this->load->model('site/songs_model');
    }


    public function get(){

        $output= $this->songs_model->get();
        echo json_encode($output);
    }


}
