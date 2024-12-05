function formatDateGB(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric', 
      month: 'long', 
      day: 'numeric', 
    };
  
    return new Intl.DateTimeFormat('en-GB', options).format(date);
  }
export default formatDateGB