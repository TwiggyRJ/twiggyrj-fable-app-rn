package com.aaronfryer.novella; 
 
import android.app.Application; 
import com.facebook.react.ReactApplication;

import com.apsl.versionnumber.RNVersionNumberPackage;
import org.devio.rn.splashscreen.SplashScreenReactPackage;
import com.lugg.ReactNativeConfig.ReactNativeConfigPackage;
import com.microsoft.appcenter.reactnative.crashes.AppCenterReactNativeCrashesPackage;
import com.microsoft.appcenter.reactnative.analytics.AppCenterReactNativeAnalyticsPackage;
import com.microsoft.appcenter.reactnative.appcenter.AppCenterReactNativePackage;
import com.RNFetchBlob.RNFetchBlobPackage;
import com.oblador.vectoricons.VectorIconsPackage; 
import com.oblador.keychain.KeychainPackage; 
import com.facebook.react.ReactNativeHost; 
import com.facebook.react.ReactPackage; 
import com.facebook.react.shell.MainReactPackage; 
import com.facebook.soloader.SoLoader; 
import java.util.Arrays; 
import java.util.List; 
 
public class MainApplication extends Application implements ReactApplication { 
 
  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) { 
    @Override 
    public boolean getUseDeveloperSupport() { 
      return BuildConfig.DEBUG; 
    } 
 
    @Override 
    protected List<ReactPackage> getPackages() { 
      return Arrays.<ReactPackage>asList( 
        new MainReactPackage(),
        new KeychainPackage(),
        new VectorIconsPackage(),
        new RNFetchBlobPackage(), 
        new RNVersionNumberPackage(),
        new SplashScreenReactPackage(),
        new ReactNativeConfigPackage(),
        new AppCenterReactNativeCrashesPackage(MainApplication.this, getResources().getString(R.string.appCenterCrashes_whenToSendCrashes)),
        new AppCenterReactNativeAnalyticsPackage(MainApplication.this, getResources().getString(R.string.appCenterAnalytics_whenToEnableAnalytics)),
        new AppCenterReactNativePackage(MainApplication.this)
      ); 
    } 
 
    @Override 
    protected String getJSMainModuleName() { 
      return "index"; 
    } 
  }; 
 
  @Override 
  public ReactNativeHost getReactNativeHost() { 
    return mReactNativeHost; 
  } 
 
  @Override 
  public void onCreate() { 
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false); 
  } 
} 