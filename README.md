# Euro -> Yen Conversion

Create a minimal project that integrates with an AI-assisted tool, uses a cloud-based platform, or sets up a simple CI workflow.

## Objective

- To use a CI workflow to automate tests.
- Verify behavior with a basic test.

## How it works

The function `conversionEuroYen(euro)`:

- returns `0` if the amount is less than or equal to `0`
- otherwise converts with a fixed rate of `185.74`

Formula used:

`yen = euro * 185.74`

## Project Structure:

- `index.js`: conversion function
- `test.js`: minimal test with console output

## Requirements

- Node.js 18+

## Execution

### 1) Run the test

To use `import/export` in `.js` files, make sure the project is in ESM mode.

If you don't have a `package.json` yet, create it like this:

```bash
echo {"type":"module"} > package.json
```

Then run the test:

```bash
node test.js
```

Output expected:

- `Test passed`

### 2) Quick function test

```bash
node -e "import('./index.js').then(m => console.log(m.conversionEuroYen(10)))"
```

Expected value for `10 EUR`: `1857.4`

## Example usage in code snippet for using the conversion function:

```js
import { conversionEuroYen } from "./index.js";

console.log(conversionEuroYen(1)); // 185.74
console.log(conversionEuroYen(0)); // 0
console.log(conversionEuroYen(-5)); // 0
```

## Possible improvements

- Read the exchange rate from an external API
- Add configurable rounding
- Handle non-numeric input with explicit errors
- Introduce multiple tests (edge cases and decimal values)
