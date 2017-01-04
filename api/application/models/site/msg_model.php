<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class msg_model extends CI_Controller {

    public function create($message){

        $this->db->insert('msg', $message);
    }

}
