# Repo Mockup
For all mockup static web, or non static

# API Spec
- mock up report
  for the mock up report here is the api specification
  ```
  [
  '{{repeat(7)}}',
  {
    days: '{{index(0,7)}}',
    days_name: '{{date(new Date(2014, 0, 1), new Date(), "DD")}}',
    month: '2',
    month_name: 'February',
    year: '2021',
    program: [
      '{{repeat(10)}}',
      {
        title: "{{company()}}",
        cam: {
          crew: [
            '{{repeat(0,7)}}',
            {
              nik: "{{integer(100, 999)}}",
              nama: "{{firstName()}} {{surname()}}",
              department: '{{random("Produksi", "Art", "TSV")}}',
              occupation: "Camera Person"
            }
          ]
        },
        lig: {
          crew: [
            '{{repeat(0,7)}}',
            {
              nik: "{{integer(100, 999)}}",
              nama: "{{firstName()}} {{surname()}}",
              department: '{{random("Produksi", "Art", "TSV")}}',
              occupation: "Light Person"
            }
          ]
        },
        aud: {
          crew: [
            '{{repeat(0,7)}}',
            {
              nik: '{{integer(100, 999)}}',
              nama: "{{firstName()}} {{surname()}}",
              department: '{{random("Produksi", "Art", "TSV")}}',
              occupation: "Audio Person"
            }
          ]
        },
        crp: {
          crew: [
            '{{repeat(0,7)}}',
            {
              nik: '{{integer(100, 999)}}',
              nama: "{{firstName()}} {{surname()}}",
              department: "Production Services",
              occupation: "Cripple Person"
            }
          ]
        },
        tp: {
          crew: [
            '{{repeat(0,7)}}',
            {
              nik: '{{integer(100, 999)}}',
              nama: "{{firstName()}} {{surname()}}",
              department: '{{random("Produksi", "Art", "TSV")}}',
              occupation: "Town Portal Person"
            }
          ]
        }
      }
    ]
  }
   ]
   
   ```
