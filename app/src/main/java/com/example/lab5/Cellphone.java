package com.example.lab5;

public class Cellphone {

    private int image;;
    private String model;
    private double price;

    // Constructor
    public Cellphone(int image, String model, double price) {
        this.image = image;
        this.model = model;
        this.price = price;
    }

    // Getters and Setters
    public int getImage() {
        return image;
    }

    public void setImage(int image) {
        this.image = image;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}
