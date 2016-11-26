<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Users_model extends CI_Controller {

    public function get(){
        $q=$this->db->get('users');
        $q=$q->result();

        return $q;
    }
    public function create($user){

        $this->db->insert('users', $user);
    }

    public function delete($user){
        $this->db->where('id', $user['id']);
        $this->db->delete('users');
    }



}
