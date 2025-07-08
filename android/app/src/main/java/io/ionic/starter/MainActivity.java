package io.ionic.starter;

import android.os.Bundle;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    // Habilita JavaScript en WebView (por si algunos videos no cargan)
    getBridge().getWebView().getSettings().setJavaScriptEnabled(true);
  }
}
