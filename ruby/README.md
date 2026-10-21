# Zip Codes Lookup API - Ruby Gem

Zip Codes Lookup finds all postal codes within a US city or resolves a five-digit ZIP code to its city and state. Paid plans add geographic coordinates.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_zipcodes'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_zipcodes
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_zipcodes'

# Initialize the client
client = APIVerve::Zipcodes::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({ zip: "64082" })

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ zip: "64082" })
  puts response["data"]
rescue APIVerve::Zipcodes::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Zipcodes::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Zipcodes::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
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

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/zipcodes?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/zipcodes?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/zipcodes?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
