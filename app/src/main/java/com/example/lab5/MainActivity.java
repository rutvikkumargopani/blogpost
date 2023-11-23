package com.example.lab5;

import androidx.appcompat.app.AppCompatActivity;
import androidx.viewpager2.widget.ViewPager2;

import android.os.Bundle;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {

    ViewPager2 vPager;
    CellphoneAdapter adapter;
    ArrayList<Cellphone> cellList;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        vPager = findViewById(R.id.vPager);
        cellList = new ArrayList<>();

        // Adding sample data
        cellList.add(new Cellphone(R.drawable.phone1, "Galaxy", 999.99));
        cellList.add(new Cellphone(R.drawable.phone2, "iphone", 899.99));
        cellList.add(new Cellphone(R.drawable.phone3, "Pixel", 1099.99));

        adapter = new CellphoneAdapter(cellList);
        vPager.setAdapter(adapter);
    }
}