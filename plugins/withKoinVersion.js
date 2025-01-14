const { withGradleProperties } = require('@expo/config-plugins');

const withKoinVersion = (config) => {
  return withGradleProperties(config, (config) => {
    // Initialize modResults if it doesn't exist
    if (!config.modResults) {
      config.modResults = [];
    }

    // Filter out existing koin properties if any exist
    config.modResults = config.modResults.filter(
      (item) => item && item.key && !item.key.includes('koin')
    );
    
    // Add new koin properties
    config.modResults.push({
      type: 'property',
      key: 'koinVersion',
      value: '3.5.0',
    });
    
    config.modResults.push({
      type: 'property',
      key: 'android.dependencies.forceKoin',
      value: 'io.insert-koin:koin-core:3.5.0,io.insert-koin:koin-android:3.5.0',
    });

    return config;
  });
};

module.exports = withKoinVersion;