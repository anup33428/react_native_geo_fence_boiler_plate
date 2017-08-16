package com.geofencing_test;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactPackage;

import java.util.List;
import java.util.Arrays;
import com.surialabs.rn.geofencing.GeoFencingPackage;
import com.facebook.react.shell.MainReactPackage;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "geofencing_test";
    }

    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
            new MainReactPackage(),
            new GeoFencingPackage()
          );
    }
}
