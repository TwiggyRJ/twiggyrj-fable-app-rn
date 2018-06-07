package com.aaronfryer.novella; 
 
import android.app.Application; 
import com.crashlytics.android.Crashlytics; 
import com.facebook.react.ReactApplication; 
import com.airbnb.android.react.lottie.LottiePackage; 
import com.smixx.fabric.FabricPackage; 
import com.oblador.vectoricons.VectorIconsPackage; 
import com.oblador.keychain.KeychainPackage; 
import com.lugg.ReactNativeConfig.ReactNativeConfigPackage; 
import com.facebook.react.ReactNativeHost; 
import com.facebook.react.ReactPackage; 
import com.facebook.react.shell.MainReactPackage; 
import com.facebook.soloader.SoLoader; 
 
import io.fabric.sdk.android.Fabric; 
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
        new LottiePackage(), 
        new FabricPackage(), 
        new VectorIconsPackage(), 
        new KeychainPackage(), 
        new ReactNativeConfigPackage() 
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
    Fabric.with(this, new Crashlytics()); 
    SoLoader.init(this, /* native exopackage */ false); 
  } 
} 