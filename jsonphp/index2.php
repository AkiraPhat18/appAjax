<?php

    $json1 = '["h\u00e0 n\u1ed9i","nam \u0111\u1ecbnh","bi\u00ean h\u00f2a","th\u00e1i b\u00ecnh"]';
    $json2 = '{"name":"nguy\u1ec5n thanh h\u1eb1ng","age":23,"location":"xu\u00e2n tr\u01b0\u1eddng" }';

    $convert1 = json_decode($json1);
    $convert2 = json_decode($json2);

    echo "<pre>";
    print_r($convert1);
    echo "</pre>";

    echo "<pre>";
    print_r($convert2);
    echo "</pre>";
