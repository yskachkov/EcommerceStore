package com.reactlibrary;

import android.content.Context;
import android.view.Gravity;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.TextView;
import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.Map;
import java.util.HashMap;

import javax.annotation.Nullable;

public class ToastModule extends ReactContextBaseJavaModule {
    private Toast toast;
    private final ReactApplicationContext reactContext;

    private static final String DURATION_SHORT_KEY = "SHORT";
    private static final String DURATION_LONG_KEY = "LONG";

    public ToastModule(ReactApplicationContext reactContext) {
        super(reactContext);

        this.toast = null;
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "Toast";
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();

        constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
        constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);

        return constants;
    }

    @ReactMethod
    public void show(String message, int duration) {
        Context context = getReactApplicationContext();

        LayoutInflater inflater = (LayoutInflater) context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
        View layout = inflater.inflate(R.layout.custom_toast, null);

        TextView text = layout.findViewById(R.id.text);
        text.setText(message);

        Toast toast = new Toast(context);
        toast.setGravity(Gravity.BOTTOM, 0, 180);
        toast.setDuration(duration);
        toast.setView(layout);

        toast.show();
        this.toast = toast;
    }

    @ReactMethod
    public void hide() {
        if (this.toast == null) {
            return;
        }

        this.toast.cancel();
        this.toast = null;
    }
}
