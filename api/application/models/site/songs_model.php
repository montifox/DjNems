<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Songs_model extends CI_Controller {

    public function get(){
        $q=$this->db->get('music');
        $q=$q->result();

        return $q;
    }

}
