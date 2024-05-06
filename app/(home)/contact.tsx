"use client"
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel,FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import {z} from "zod"
import { MdLocationOn,MdMail  } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

type Props = {}

const formSchema = z.object({
  country:z.string(),
  organization:z.string(),
  fullname:z.string().min(3,{message:"Fullname is required"}),
  email:z.string().email({message:"Email is required"}),
  contactNumber:z.string(),
  message:z.string().min(1,{message:"Message is required"}),
})

const countries =[
  "Nepal","Afghanistan","Albania","Algeria","Andorra","Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic (Czechia)",
  "Democratic Republic of the Congo",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor (Timor-Leste)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Ivory Coast",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe"
]


const Contact = (props: Props) => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver:zodResolver(formSchema),
    defaultValues:{
      country:"Nepal",
      organization:"",
      fullname:"",
      email:"",
      contactNumber:"",
      message:""
    }
  })

  const onSubmit = (formData:z.infer<typeof formSchema>) => {
    console.log(formData)
  }
  return (
    <div className='bg-secondaryBackground py-10 text-center'>
      <a id='contact'/>
      <h2 className='uppercase  text-secondary-text tracking-widest  font-bold text-2xl '>keep in touch</h2>
      <p className='text-white font-medium'>You are in a good company.</p>

      <div className='flex flex-col md:flex-row justify-between gap-2 text-white pb-32 text-left px-5 md:px-60'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-4 w-full  md:w-2/3'>

          <FormField control={form.control}
          name='country'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Country</FormLabel>
              <FormControl>
                <select className='text-primary-text w-full rounded-md py-2' {...field}>
                  {countries.map((country)=>(
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </FormControl>
            </FormItem>
          )}
          />

          <FormField control={form.control}
          name='organization'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Organization</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
            </FormItem>
          )}
          />

          <FormField control={form.control}
          name='fullname'
          render={({ field }) => (
            <FormItem>
              <div className='flex gap-2 items-center'>
              <FormLabel className='required'>Fullname</FormLabel>
              <FormMessage/>
              </div>
              <FormControl>
                <Input type="text" {...field}  />
              </FormControl>
            </FormItem>
          )}
          />

          <FormField control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <div className='flex gap-2 items-center'>
              <FormLabel className='required'>Email</FormLabel>
              <FormMessage/>
              </div>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
            </FormItem>
          )}
          />

          <FormField control={form.control}
          name='contactNumber'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contact Number</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
            </FormItem>
          )}
          />

          <FormField control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem>
              <div className='flex gap-2 items-center'>
              <FormLabel className='required'>Message</FormLabel>
              <FormMessage/>
              </div>
              <FormControl>
                <Textarea {...field} className='resize-none' rows={8} />
              </FormControl>
            </FormItem>
          )}
          />

<Button className="uppercase mx-auto md:mx-0 tracking-widest bg-secondary-text w-fit  rounded-full font-bold px-10 py-5 hover:bg-white hover:text-secondary-text duration-500">submit</Button>

          </form>

        </Form>
        <div className='flex flex-col  items-center gap-10'>
          <div className='text-center w-60'>
            <MdLocationOn size={40} className='text-secondary-text mx-auto'/>
            <p className='text-white mt-2'>158-Nirmal Lama Marg, Nayabazar, Kathmandu, Nepal Kathmandu – 44600</p>
          </div>
          <div className='text-center w-60'>
            <MdMail size={40} className='text-secondary-text mx-auto'/>
            <p className='text-white mt-2'>info@mbnepal.com</p>
          </div>
          <div className='text-center w-60'>
            <FaPhone size={40} className='text-secondary-text mx-auto'/>
            <p className='text-white mt-2'>(977)-01-4958319</p>
          </div>
        </div>
      </div>

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.886223705193!2d85.30707947532423!3d27.720798976174883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18e39672bbc3%3A0x47e2a3602699faef!2sMicroBanker%20Nepal%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1714304041231!5m2!1sen!2snp" width="100%" height="600"  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Contact