import LocalisationEN from './Localisation-EN';

const useLocalisation = lang => {
  const languages = {LocalisationEN};
  return languages['Localisation' + lang];
};

export default useLocalisation;
