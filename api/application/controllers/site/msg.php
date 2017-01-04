<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class msg extends CI_Controller {

    public function __construct(){
        parent:: __construct();

        $post = file_get_contents('php://input');
        $_POST =json_decode($post, true);

        $this->load->model('site/msg_model');
    }

    public function create($message){
        $msg = $this -> input -> post( 'message' );
        $this->msg_model->create( $msg );
    }


}
