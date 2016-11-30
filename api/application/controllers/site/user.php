<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class User extends CI_Controller {

    public function __construct(){
        parent:: __construct();

        $post = file_get_contents('php://input');
        $_POST =json_decode($post, true);

        $this->load->model('site/User_model');
    }


    public function get(){

        $output= $this->User_model->get();
        echo json_encode($output);
    }

    public function create($user){
        $user = $this -> input -> post( 'user' );
        $user['role']='user';
        unset($user['passconf']);
        
        $user['password']=crypt($user['password'],config_item('encryption_key'));
        
        
        $this->User_model->create( $user );
    }

    public function login(){
        
  
        $email = $this->input->post('email');
        $password = $this->input->post('password');
        $password = crypt( $password , config_item( 'encryption_key' ) );

        
        $login = $this->User_model->login($email,$password);
        
        if(!$login)
        {
            $output['error']='Bledne haslo lub email';
            $output['check']=FALSE;
        }
        else
        {    
            /*
            $token=$this->jwt->encode(array(
            'userId'=> $login->id,
            'name'=> $login->name,
            'email'=> $login->email,
            'role'=> $login->role
            ), config_item('encryption_key'));
            */
            // $output['token']=$token;
            $output['password']=$password;
            $output['email']=$email;
            $output['check']=TRUE;
        }
        
        echo json_encode($output);
  
    }
}
