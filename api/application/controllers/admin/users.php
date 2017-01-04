<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Users extends CI_Controller {

    public function __construct(){
        parent:: __construct();

        $post = file_get_contents('php://input');
        $_POST =json_decode($post, true);

        $this->load->model('admin/users_model');

    }


    public function get( ){

        $output= $this->users_model->get();
        echo json_encode($output);
    }

    public function create(){
        $user = $this -> input -> post( 'user' );
        unset($user['passconf']);
        
        
        $user['password']=crypt($user['password'],config_item('encryption_key'));
        
        
        $this->users_model->create( $user );
    }

    public function delete(){

        $user=$this->input->post('user');
        $this->users_model->delete($user);
    }


}
