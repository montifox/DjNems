<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Songs_model extends CI_Controller {

    public function get(){
        $q=$this->db->get('music');
        $q=$q->result();

        return $q;
    }
    public function create($song){
        
        $this->db->insert('music', $song);
    }
    
    public function delete($song){
        $this->db->where('id', $song['id']);
        $this->db->delete('music');
    }
    


}
