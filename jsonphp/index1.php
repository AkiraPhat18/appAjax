<?php
    $phpArrray = array("hà nội","nam định","biên hòa","thái bình");

    class Student {
        public $name;

        public $age;

        public $location;

        public function  _construct($name,$age,$location){
            $this->name = $name;
            $this->age = $age;
            $this->location = $location;
        }
    }

    $an = new Student();
    $an->name = "nguyễn thanh hằng";
    $an->age = 23;
    $an->location = "xuân trường";

    echo "<pre>";
    print_r($phpArrray);
    echo "</pre>";

    echo "<pre>";
    print_r($an);
    echo "</pre>";

    $phpJson1 = json_encode($phpArrray);

    echo "<pre>";
    print_r($phpJson1);
    echo "</pre>";

    $phpJson2 = json_encode($an);

    echo "<pre>";
    print_r($phpJson2);
    echo "</pre>";