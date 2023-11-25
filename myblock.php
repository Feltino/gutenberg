<?php
/**
* Plugin Name: My Block
* Plugin URI: https://myblock.com
* Description: Gutenberg Block
* Author: Oleksandr Pavlov
* Author URI: https://myblock.com/oleksandr
*/

function feltino_myblock_init(){
    register_block_type_from_metadata( __DIR__ );
}
add_action('init', 'feltino_myblock_init');