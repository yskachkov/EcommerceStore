package com.persistentstorage;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;

import org.json.JSONObject;

import java.io.File;
import java.io.FileReader;
import java.io.BufferedReader;
import java.io.FileWriter;

public class PersistentStorageModule extends ReactContextBaseJavaModule {
    private final ReactApplicationContext reactContext;

    private final String storageFileName = "storage.json";

    private final String storageFilePathName;

    public PersistentStorageModule(ReactApplicationContext reactContext) {
        super(reactContext);

        this.reactContext = reactContext;
        this.storageFilePathName = reactContext.getFilesDir().getAbsolutePath();
    }

    @Override
    public String getName() {
        return "PersistentStorage";
    }

    private File getStorageFile() {
        return new File(this.storageFilePathName, this.storageFileName);
    }

    private String getStorageData() {
        File file = this.getStorageFile();

        StringBuilder text = new StringBuilder();

        try {
            BufferedReader bufferedReader = new BufferedReader(new FileReader(file));
            String fileLine;

            while ((fileLine = bufferedReader.readLine()) != null) {
                text.append(fileLine);
                text.append('\n');
            }

            bufferedReader.close();

            return text.toString();
        } catch (Exception error) {
            error.printStackTrace();

            return "";
        }
    }

    @ReactMethod
    public void get(String key, Promise promise) {
        String storageData = this.getStorageData();

        if (storageData.isEmpty()) {
            promise.resolve(null);
            return;
        }

        try {
            JSONObject jsonStorageData = new JSONObject(storageData);
            String value = jsonStorageData.getString(key);

            if (value.isEmpty()) {
                value = null;
            }

            promise.resolve(value);
        } catch (Exception error) {
            error.printStackTrace();

            promise.resolve(null);
        }
    }

    @ReactMethod
    public void set(String key, String value, final Promise promise) {
        File file = this.getStorageFile();
        JSONObject jsonStorageData;

        try {
            if (file.exists()) {
                String storageData = this.getStorageData();

                jsonStorageData = new JSONObject(storageData);
            } else {
                file.getParentFile().mkdirs();

                jsonStorageData = new JSONObject();
            }

            jsonStorageData.put(key, value);

            FileWriter stream = new FileWriter(file);

            stream.write(jsonStorageData.toString());
            stream.flush();
            stream.close();

            WritableMap res = Arguments.createMap();
            res.putString(key, value);

            promise.resolve(res);
        } catch (Exception error) {
            error.printStackTrace();

            promise.reject(error);
        }
    }

    @ReactMethod
    public void remove(String key, Promise promise) {
        String storageData = this.getStorageData();

        if (storageData.isEmpty()) {
            promise.resolve(false);
            return;
        }

        try {
            File file = this.getStorageFile();
            FileWriter stream = new FileWriter(file);

            JSONObject jsonStorageData = new JSONObject(storageData);
            Object result = jsonStorageData.remove(key) != null;

            stream.write(jsonStorageData.toString());
            stream.flush();
            stream.close();

            promise.resolve(result);
        } catch (Exception error) {
            error.printStackTrace();

            promise.reject(error);
        }
    }

    @ReactMethod
    public void clear(Promise promise) {
        File file = new File(this.storageFilePathName, this.storageFileName);

        try {
            promise.resolve(file.delete());
        } catch (Exception error) {
            error.printStackTrace();

            promise.reject(error);
        }
    }
}
