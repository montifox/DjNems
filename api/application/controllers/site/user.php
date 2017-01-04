<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class User extends CI_Controller {

    public function __construct(){
        parent:: __construct();

        $post = file_get_contents('php://input');
        $_POST =json_decode($post, true);

        $this->load->model('site/User_model');
    }


    public function login(){
        
  
        $email = $this->input->post('email');
        $password = $this->input->post('password');
        $password = crypt( $password , config_item( 'encryption_key' ) );

        
        $login = $this->User_model->login($email,$password);
        
        if(!$login)
        {
            $output['error']='Nie jesteś adminem.';
            $output['check']=FALSE;
        }
        else
        {    
           
            $output['password']=$password;
            $output['email']=$email;
            $output['check']=TRUE;
        }
        
        echo json_encode($output);
  
    }
}
