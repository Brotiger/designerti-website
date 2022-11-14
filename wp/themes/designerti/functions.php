<?php

add_action('wp_enqueue_scripts', 'style_theme');
add_action('wp_enqueue_scripts', 'script_theme');
add_action('after_setup_theme', 'register_nav_menu');

function style_theme()
{
    wp_enqueue_style('style', get_stylesheet_uri());
    wp_enqueue_style('bootstrap-icons', 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css');
    wp_enqueue_style('main-1', get_template_directory_uri() . '/assets/css/main.be91b8da15e82f9cdb17.css');
    wp_enqueue_style('main-2', get_template_directory_uri() . '/assets/css/713.be91b8da15e82f9cdb17.css');
}

function script_theme()
{
    wp_enqueue_script('main-script-1', get_template_directory_uri() . '/assets/js/main.be91b8da15e82f9cdb17.js');
    wp_enqueue_script('main-script-2', get_template_directory_uri() . '/assets/js/713.be91b8da15e82f9cdb17.js');
}

function register_nav_menu(){
    register_nab_menu('top', 'Меню в шапке');
}