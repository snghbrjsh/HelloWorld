package com.test.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller

public class IndexController {
    @RequestMapping("/")
    public ModelAndView helloWorld() {
        System.out.println("hello world");
        return new ModelAndView("home");
    }

    @RequestMapping("/home")
    public ModelAndView home() {
        System.out.println("home");
        return new ModelAndView("home");
    }
}
