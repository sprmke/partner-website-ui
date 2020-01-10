export const sampleStatic = {
  getSampleString() {
    return 'Sample returned string';
  },
  getSampleObject() {
    return {
      sample: 'returned object'
    };
  },
  getSampleArray() {
    return [
      'sample returned object',
      { sample: 'returned object' },
      { sample: 'returned object' }
    ];
  }
}