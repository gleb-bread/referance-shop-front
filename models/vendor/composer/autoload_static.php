<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit69af50b98e0a97ca0c16712e78d4e587
{
    public static $prefixLengthsPsr4 = array (
        'p' => 
        array (
            'parser\\' => 7,
        ),
        'D' => 
        array (
            'DiDom\\' => 6,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'parser\\' => 
        array (
            0 => __DIR__ . '/../..' . '/parser',
        ),
        'DiDom\\' => 
        array (
            0 => __DIR__ . '/..' . '/imangazaliev/didom/src/DiDom',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit69af50b98e0a97ca0c16712e78d4e587::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit69af50b98e0a97ca0c16712e78d4e587::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit69af50b98e0a97ca0c16712e78d4e587::$classMap;

        }, null, ClassLoader::class);
    }
}
