<?php

use ExpressionEngine\Service\Database;

return array(
    'author'      => 'My Vendor',
    'author_url'  => 'https://example.com/',
    'name'        => 'Help Desk',
    'description' => 'Plugin Tag Access to My Help Desk Software',
    'version'     => '1.0.0',
    'namespace'   => 'MyVendor\HelpDesk',

    'services' => array(

        // This service will be used to query our external database
        // e.g., ee('help_desk:db')->select()
        'db' => function ($addon) {
            return $addon->make('help_desk:Database')->newQuery();
        },

        // This service manages our external database connection
        // e.g., ee('help_desk:Database')->getLog()
        'Database' => function ($addon) {
            // Makes sure we only do this work once per page request
            static $db;

            if (empty($db)) {
                // fetch config from system/user/config/help_desk_database.php
                $config = ee('Config')->getFile('help_desk_database');

                // create the DBConfig object
                $db_config = new Database\DBConfig($config);

                // select the database connection group
                $db_config->getGroupConfig('help_desk');

                // connect to and make the Database object
                $db = new Database\Database($db_config);
            }

            return $db;
        }

    )
);
