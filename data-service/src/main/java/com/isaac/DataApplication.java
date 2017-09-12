package com.isaac;

import com.isaac.entities.Book;
import com.isaac.repositories.BookRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import java.util.Arrays;

@SpringBootApplication
public class DataApplication {
    public static void main(String[] args) {
        SpringApplication.run(DataApplication.class, args);
    }


    @Bean
    CommandLineRunner commandLineRunner(BookRepository bookRepository)
    {

        return new CommandLineRunner() {
            @Override
            public void run(String... strings) throws Exception {

                Book book1=new Book("Angular2", "123-4-564");
                Book book2=new Book("SpringBoot", "34828-234-568");

                bookRepository.save(Arrays.asList(book1,book2));
            }
        };

    }
}

@Configuration
class WebConfig extends WebMvcConfigurerAdapter {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**");
    }
}
