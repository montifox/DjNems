<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class User_Model extends CI_Controller {

    public function get(){
        $q=$this->db->get('users');
        $q=$q->result();

        return $q;
    }
    public function create($user){

        $this->db->insert('users', $user);
    }

    public function login( $email , $password )
    {
        
        $this->db->where( 'email' , $email );
        $q = $this->db->get( 'users' );
        $result = $q->row();
        
        if(empty($result) || $password != $result->password)
        {
            $output = false;
        }
        else{
            $output = $result;
        }
        return $output;
        
    }
}
