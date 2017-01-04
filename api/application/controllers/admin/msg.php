<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class msg extends CI_Controller {

    public function __construct(){
        parent:: __construct();

        $post = file_get_contents('php://input');
        $_POST =json_decode($post, true);

        $this->load->model('admin/msg_model');
    }


    public function get(){

        $output= $this->msg_model->get();
        echo json_encode($output);
    }


    public function delete(){

        $msg=$this->input->post('msg');
        $this->msg_model->delete($msg);
    }


}
