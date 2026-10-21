# Zip Codes Lookup API - PHP Package

Zip Codes Lookup finds all postal codes within a US city or resolves a five-digit ZIP code to its city and state. Paid plans add geographic coordinates.

## Installation

Install via Composer:

```bash
composer require apiverve/zipcodes
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Zipcodes\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute(['zip' => '64082']);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Zipcodes\Client;
use APIVerve\Zipcodes\Exceptions\APIException;
use APIVerve\Zipcodes\Exceptions\ValidationException;

try {
    $response = $client->execute(['zip' => '64082']);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
```

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "zipcode": "64082",
    "state_abbr": "MO",
    "latitude": "38.850243",
    "longitude": "-94.39570",
    "city": "Lees Summit",
    "state": "Missouri"
  }
}
```

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/zipcodes?utm_source=packagist&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/zipcodes?utm_source=php&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/zipcodes?utm_source=php&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).
