<?php if (!defined('BASEPATH')) exit('No direct script access allowed');
$config['allow_php'] = 'y';
$config['site_license_key'] = '';
// ExpressionEngine Config Items
// Find more configs and overrides at
// https://docs.expressionengine.com/latest/general/system-configuration-overrides.html

$config['app_version'] = '6.2.7';
$config['encryption_key'] = '319408cad8b595c4d4915ff4399cce3ce52557dc';
$config['session_crypt_key'] = '4014e95071153551d0d20f2f0d092538e55cde34';
$config['database'] = array(
	'expressionengine' => array(
		'hostname' => 'localhost',
		'database' => 'test',
		'username' => 'root',
		'password' => '',
		'dbprefix' => 'exp2022_',
		'char_set' => 'utf8mb4',
		'dbcollat' => 'utf8mb4_unicode_ci',
		'port'     => ''
	),
);
$config['show_ee_news'] = 'y';

// EOF