package com.example.lab5;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import java.util.ArrayList;

public class CellphoneAdapter extends RecyclerView.Adapter<CellphoneAdapter.ViewHolder> {
    private ArrayList<Cellphone> Cellphone;

    // Constructor
    public CellphoneAdapter(ArrayList<Cellphone> Cellphone) {
        this.Cellphone = Cellphone;
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.pager_layout, parent, false);
        return new ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
        Cellphone cellphone = Cellphone.get(position);
        holder.imgPhone.setImageResource(cellphone.getImage());
        holder.txtBrand.setText(cellphone.getModel());
        holder.txtPrice.setText(String.valueOf(cellphone.getPrice()));
    }

    @Override
    public int getItemCount() {
        return Cellphone.size();
    }

    public static class ViewHolder extends RecyclerView.ViewHolder {
        ImageView imgPhone;
        TextView txtBrand;
        TextView txtPrice;

        public ViewHolder(@NonNull View itemView) {
            super(itemView);
            imgPhone = itemView.findViewById(R.id.imgPhone);
            txtBrand = itemView.findViewById(R.id.txtBrand);
            txtPrice = itemView.findViewById(R.id.txtPrice);
        }
    }



}
