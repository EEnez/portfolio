console.log('🔍 Checking environment variables...\n');

const requiredVars = [
  'RESEND_API_KEY',
  'RESEND_FROM_EMAIL'
];

const optionalVars = [
  'NODE_ENV'
];

let allGood = true;

console.log('📋 Required variables:');
requiredVars.forEach(varName => {
  const value = process.env[varName];
  if (value) {
    const maskedValue = varName.includes('KEY') 
      ? `${value.substring(0, 10)}...${value.substring(value.length - 4)}`
      : value;
    console.log(`  ✅ ${varName}: ${maskedValue}`);
  } else {
    console.log(`  ❌ ${varName}: MISSING`);
    allGood = false;
  }
});

console.log('\n📋 Optional variables:');
optionalVars.forEach(varName => {
  const value = process.env[varName];
  if (value) {
    console.log(`  ✅ ${varName}: ${value}`);
  } else {
    console.log(`  ⚠️  ${varName}: not set (using default)`);
  }
});

console.log('\n🔧 Configuration check:');
if (process.env.RESEND_API_KEY) {
  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey.startsWith('re_') && apiKey.length >= 20) {
    console.log('  ✅ RESEND_API_KEY format: Valid');
  } else {
    console.log('  ❌ RESEND_API_KEY format: Invalid (should start with "re_" and be at least 20 chars)');
    allGood = false;
  }
}

if (process.env.RESEND_FROM_EMAIL) {
  const email = process.env.RESEND_FROM_EMAIL;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(email)) {
    console.log('  ✅ RESEND_FROM_EMAIL format: Valid');
  } else {
    console.log('  ❌ RESEND_FROM_EMAIL format: Invalid email format');
    allGood = false;
  }
}

console.log('\n📊 Summary:');
if (allGood) {
  console.log('  🎉 All required environment variables are properly configured!');
  console.log('  🚀 Your contact form should work correctly.');
} else {
  console.log('  ⚠️  Some required environment variables are missing or invalid.');
  console.log('  📝 Please check your .env file and DEPLOYMENT.md for guidance.');
}

console.log('\n💡 Tips:');
console.log('  - Make sure your .env file is in the root directory');
console.log('  - For production, set these variables on your hosting platform');
console.log('  - Never commit your .env file to version control');
console.log('  - Use .env.example as a template');
console.log('  - Check DEPLOYMENT.md for detailed instructions');
