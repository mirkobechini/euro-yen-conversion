import {conversionEuroYen} from './index.js';

const yen = conversionEuroYen(1);

if(yen.toFixed(2) === '185.74') {
    console.log('✅ Test passed');
    process.exit(0);
} else {
    console.log('❌ Test failed');
    process.exit(1);
}