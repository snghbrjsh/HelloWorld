package com.test.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller

public class IndexController {
    @RequestMapping("/")
    public ModelAndView helloWorld() {
        return new ModelAndView("home");
    }
}
