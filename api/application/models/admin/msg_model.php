<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class msg_model extends CI_Controller {

    public function get(){
        $q=$this->db->get('msg');
        $q=$q->result();

        return $q;
    }

    public function delete($msg){
        $this->db->where('id', $msg['id']);
        $this->db->delete('msg');
    }



}
