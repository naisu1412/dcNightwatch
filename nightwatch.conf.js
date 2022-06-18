module.exports = {
  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.
  src_folders: [],
  page_objects_path: './pages',
  custom_commands_path: './custom_command',
  custom_assertions_path: './custom_assertion',

  webdriver: {},

  test_settings: {
    default: {
      disable_error_log: false,
      launch_url: 'https://www.demo.bnz.co.nz/client/',

      screenshots: {
        enabled: false,
        path: 'screens',
        on_failure: true
      },

      desiredCapabilities: {
        browserName: 'firefox'
      },

      webdriver: {
        start_process: true,
        server_path: ''
      }
    },

    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        alwaysMatch: {
          acceptInsecureCerts: true,
          'moz:firefoxOptions': {
            args: [
              // '-headless',
              // '-verbose'
            ]
          }
        }
      },
      webdriver: {
        start_process: true,
        server_path: '',
        cli_args: [
          // very verbose geckodriver logs
          // '-vv'
        ]
      }
    },

    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          // More info on Chromedriver: https://sites.google.com/a/chromium.org/chromedriver/
          //
          // w3c:false tells Chromedriver to run using the legacy JSONWire protocol (not required in Chrome 78)
          w3c: true,
          excludeSwitches: ["enable-logging"],
          args: [
            //'--no-sandbox',
            //'--ignore-certificate-errors',
            //'--allow-insecure-localhost',
            //'--headless'
            '--excludeSwitches',
            '--enable-logging'
          ]
        }
      },

      webdriver: {
        start_process: true,
        server_path: '',
        cli_args: [
          // --verbose
        ]
      }
    },

    edge: {
      desiredCapabilities: {
        browserName: 'MicrosoftEdge',
        'ms:edgeOptions': {
          w3c: true,
          // More info on EdgeDriver: https://docs.microsoft.com/en-us/microsoft-edge/webdriver-chromium/capabilities-edge-options
          args: [
            //'--headless'
          ]
        }
      },

      webdriver: {
        start_process: true,
        // Download msedgedriver from https://docs.microsoft.com/en-us/microsoft-edge/webdriver-chromium/
        //  and set the location below:
        server_path: '',
        cli_args: [
          // --verbose
        ]
      }
    },

    //////////////////////////////////////////////////////////////////////////////////
    // Configuration for when using the Selenium service, either locally or remote,  |
    //  like Selenium Grid                                                           |
    //////////////////////////////////////////////////////////////////////////////////
    selenium_server: {
      // Selenium Server is running locally and is managed by Nightwatch
      // Install the NPM package @nightwatch/selenium-server or download the selenium server jar file from https://github.com/SeleniumHQ/selenium/releases/, e.g.: selenium-server-4.1.1.jar
      selenium: {
        start_process: true,
        port: 4444,
        server_path: '', // Leave empty if @nightwatch/selenium-server is installed
        command: 'standalone', // Selenium 4 only
        cli_args: {
          //'webdriver.gecko.driver': '',
          //'webdriver.chrome.driver': ''
        }
      },
      webdriver: {
        start_process: false,
        default_path_prefix: '/wd/hub'
      }
    },

    'selenium.chrome': {
      extends: 'selenium_server',
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          w3c: true
        }
      }
    },

    'selenium.firefox': {
      extends: 'selenium_server',
      desiredCapabilities: {
        browserName: 'firefox',
        'moz:firefoxOptions': {
          args: [
            // '-headless',
            // '-verbose'
          ]
        }
      }
    }
  }
};
