import { Platform, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

interface MapViewProps {
  address: string;
  style?: any;
}

export default function MapView({ address, style }: MapViewProps) {
  const encodedAddress = encodeURIComponent(address);
  const mapUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  // Para WEB: usar iframe nativo
  if (Platform.OS === 'web') {
    return (
      <iframe
        src={mapUrl}
        style={{
          border: 0,
          width: '100%',
          height: '100%',
          ...StyleSheet.flatten(style),
        }}
        allowFullScreen
        loading="lazy"
      />
    );
  }

  // Para MOBILE (iOS/Android): usar WebView
  return (
    <WebView
      source={{
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
              <style>
                * { margin: 0; padding: 0; }
                body, html { height: 100%; width: 100%; overflow: hidden; }
                iframe { border: 0; width: 100%; height: 100%; }
              </style>
            </head>
            <body>
              <iframe
                src="${mapUrl}"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </body>
          </html>
        `
      }}
      style={style}
      scrollEnabled={false}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    />
  );
}
