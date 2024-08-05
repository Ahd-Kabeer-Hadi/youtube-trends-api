# YouTube Trends API

This repository contains the source code for a YouTube Trends API built using Express and TypeScript. The API leverages the `google-trends-api-code` library to fetch real-time Google Trends data, specifically targeting YouTube trends. The API supports various filters such as region, country, state, and language, allowing for tailored data retrieval.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Features

- Fetch real-time Google Trends data for YouTube keywords.
- Apply various filters: region, country, state, language, etc.
- Retrieve historical keyword trends.
- TypeScript support for type safety and better development experience.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (version 14 or later)
- npm (version 6 or later)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Ahd-Kabeer-Hadi/youtube-trends-api.git
    cd youtube-trends-api
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add any necessary environment variables.

## Usage

1. Start the server:
    ```bash
    npm start
    ```

2. The server will be running at `http://localhost:3000`.

## API Documentation

### Base URL

```
http://localhost:3000/api
```

### Endpoints

#### Fetch Real-Time YouTube Trends Data

```http
GET /api/trends
```

##### Parameters

| Parameter   | Type     | Description                                                        |
|-------------|----------|--------------------------------------------------------------------|
| `keyword`   | `string` | **Required**. The keyword to fetch trends data for.                |
| `region`    | `string` | Optional. The region to filter the trends data.                    |
| `country`   | `string` | Optional. The country to filter the trends data.                   |
| `state`     | `string` | Optional. The state to filter the trends data.                     |
| `language`  | `string` | Optional. The language to filter the trends data.                  |

##### Response

```json
{
  "keyword": "example",
  "region": "US",
  "country": "US",
  "state": "CA",
  "language": "en",
  "trends": [
    {
      "date": "2024-08-01",
      "value": 75
    },
    {
      "date": "2024-08-02",
      "value": 80
    }
    ...
  ]
}
```

#### Fetch Historical Keyword Trends

```http
GET /api/trends/historical
```

##### Parameters

| Parameter   | Type     | Description                                                        |
|-------------|----------|--------------------------------------------------------------------|
| `keyword`   | `string` | **Required**. The keyword to fetch historical trends data for.     |
| `region`    | `string` | Optional. The region to filter the trends data.                    |
| `country`   | `string` | Optional. The country to filter the trends data.                   |
| `state`     | `string` | Optional. The state to filter the trends data.                     |
| `language`  | `string` | Optional. The language to filter the trends data.                  |
| `timeRange` | `string` | Optional. The time range for historical data (e.g., "today 12-m"). |

##### Response

```json
{
  "keyword": "example",
  "region": "US",
  "country": "US",
  "state": "CA",
  "language": "en",
  "timeRange": "today 12-m",
  "trends": [
    {
      "date": "2023-08-01",
      "value": 60
    },
    {
      "date": "2023-09-01",
      "value": 65
    }
    ...
  ]
}
```

## Examples

### Fetch Real-Time Trends for a Keyword

```bash
curl -X GET "http://localhost:3000/api/trends?keyword=javascript"
```

### Fetch Historical Trends for a Keyword

```bash
curl -X GET "http://localhost:3000/api/trends/historical?keyword=javascript&timeRange=today 12-m"
```

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
