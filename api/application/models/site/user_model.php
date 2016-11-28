<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class User_model extends CI_Controller {

    public function get(){
        $q=$this->db->get('users');
        $q=$q->result();

        return $q;
    }
    public function create($user){

        $this->db->insert('users', $user);
    }

}
