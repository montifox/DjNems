<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class User extends CI_Controller {

    public function __construct(){
        parent:: __construct();

        $post = file_get_contents('php://input');
        $_POST =json_decode($post, true);

        $this->load->model('site/user_model');
    }


    public function get(){

        $output= $this->user_model->get();
        echo json_encode($output);
    }

    public function create($user){
        $user = $this -> input -> post( 'user' );
        unset($user['passconf']);
        $this->user_model->create( $user );
    }


}
