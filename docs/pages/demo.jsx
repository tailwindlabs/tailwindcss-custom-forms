import '../static/css/tailwind.css'
import Head from 'next/head'

export default () => (
  <div className="antialiased text-gray-900 px-6">
    <Head>
      <title>Tailwind CSS Custom Forms</title>
    </Head>

    <div className="max-w-2xl mx-auto py-12">
      <div className="flex flex-wrap -mx-6">
        <div className="w-1/2 px-6">
          <label className="block">
            <span className="text-gray-700">Input</span>
            <input type="email" className="form-input mt-1 block w-full" placeholder="john@example.com"/>
          </label>

          <label className="block mt-4">
            <span className="text-gray-700">Textarea</span>
            <textarea className="form-textarea mt-1 block w-full h-24" rows="3" placeholder="Enter some long form content."></textarea>
          </label>

          <div className="block mt-4">
            <span className="text-gray-700">Checkboxes</span>
            <div className="mt-2">
              <div>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox text-gray-800"/>
                  <span className="ml-2">Option 1</span>
                </label>
              </div>
              <div>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox text-gray-800"/>
                  <span className="ml-2">Option 2</span>
                </label>
              </div>
              <div>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox text-gray-800"/>
                  <span className="ml-2">Option 3</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 px-2">
          <label className="block">
            <span className="text-gray-700">Select</span>
            <select className="form-select block w-full mt-1">
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          </label>

          <label className="block mt-4">
            <span className="text-gray-700">Multiselect</span>
            <select className="form-multiselect block w-full h-24 mt-1" multiple>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
              <option>Option 5</option>
            </select>
          </label>

          <div className="block mt-4">
            <span className="text-gray-700">Radio Buttons</span>
            <div className="mt-2">
              <div>
                <label className="inline-flex items-center">
                  <input type="radio" className="form-radio text-gray-800" name="radio-direct" value="1"/>
                  <span className="ml-2">Option 1</span>
                </label>
              </div>
              <div>
                <label className="inline-flex items-center">
                  <input type="radio" className="form-radio text-gray-800" name="radio-direct" value="2"/>
                  <span className="ml-2">Option 2</span>
                </label>
              </div>
              <div>
                <label className="inline-flex items-center">
                  <input type="radio" className="form-radio text-gray-800" name="radio-direct" value="3"/>
                  <span className="ml-2">Option 3</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
