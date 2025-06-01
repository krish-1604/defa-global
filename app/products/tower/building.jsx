import React from 'react';
import { CheckCircle } from 'lucide-react';

const DeFaGlobalBrochure = () => {
  return (
    <div className="bg-[#eefeff] min-h-screen flex flex-col items-center justify-center py-32 px-4">
      <div className="w-full ">
        
        {/* Header Section - Building The Future */}
        <div className="relative  p-8">
          <h1 className="text-5xl font-bold text-blue-800 mb-6 text-center">Building The Future</h1>
          <div className="w-24 h-1 bg-golden mx-auto mb-32"></div>
          <div className="flex items-start justify-between max-w-7xl mx-auto">
            <div className="flex-1 pr-20">
              <p className="text-blue-700 text-xl leading-relaxed mb-4">
                At DeFa Global, we supply premium construction materials along with durable, high-capacity tower cranes and hoists for large-scale building projects. Whether for high-rises or industrial sites, our equipment meets international safety and performance standards.
              </p>
              <p className="text-blue-700 text-xl leading-relaxed mb-16">
                Our building materials and construction equipment are sourced from trusted manufacturers to ensure safety, durability, and compliance with industry standards.
              </p>
              
              {/* Feature Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center mr-3">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-blue-700 text-xl font-medium">Quality Assurance</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center mr-3">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-blue-700 text-xl font-medium">Safety Compliance</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center mr-3">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-blue-700 text-xl font-medium">Technical Support</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center mr-3">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-blue-700 text-xl font-medium py-8">Maintenance Services</span>
                </div>
              </div>
            </div>
            
            {/* Construction Image */}
            <div className="w-80 h-64">
              <img 
                src="/api/placeholder/320/256" 
                alt="Construction site with tower crane at sunset"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Our Products Header */}
        <div className="text-center py-16">
          <h2 className="text-5xl font-bold text-blue-800">Our Products</h2>
          <div className="w-24 h-1 bg-golden mx-auto mb-3 my-8"></div>
        </div>

        {/* Tower Cranes Section */}
        <div className="pt-0 border-b border-blue-200">
          <div className="max-w-7xl mx-auto">
            <div className="flex gap-8">
              <div className="w-96 h-72">
                <img 
                  src="/api/placeholder/320/256" 
                  alt="Red tower crane against blue sky"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">Tower Cranes</h3>
                <p className="text-blue-700 text-xl mb-4">
                  High-capacity tower cranes for construction projects of all sizes. Our tower cranes are designed for reliability, safety, and efficiency on construction sites.
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-blue-700  text-xl mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center mr-3">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-blue-700 text-xl">Load capacities from 6 to 32 tons</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center mr-3">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-blue-700 text-xl">Maximum jib lengths up to 80 meters</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center mr-3">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-blue-700 text-xl">Advanced safety systems</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center mr-3">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-blue-700 text-xl">Remote monitoring capabilities</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center mr-3">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-blue-700 text-xl">Compliant with international safety standards</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            

            {/* Technical Specifications and Applications Grid */}
            <div className="grid grid-cols-2 gap-8 mt-16 relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-yellow-400 transform -translate-x-1/2"></div>
              <div>
                <h4 className="font-semibold text-blue-700 text-xl mb-3">Technical Specifications:</h4>
                <ul className="space-y-1">
                  <li className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-yellow-400 mr-3"></div>
                    <span className="text-blue-700 text-xl">Load Capacity: 6 - 32 tons</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-yellow-400 mr-3"></div>
                    <span className="text-blue-700 text-xl">Max Jib Length: Up to 80 meters</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-yellow-400 mr-3"></div>
                    <span className="text-blue-700 text-xl">Max Free-standing Height: Up to 85 meters</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-yellow-400 mr-3"></div>
                    <span className="text-blue-700 text-xl">Power Supply: 380-400V, 50/60Hz</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-yellow-400 mr-3"></div>
                    <span className="text-blue-700 text-xl">Wind Resistance: Up to 72 km/h in service</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 text-xl mb-3">Common Applications:</h4>
                <ul className="space-y-1">
                  <li className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-yellow-400 mr-3"></div>
                    <span className="text-blue-700 text-xl">High-rise building construction</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-yellow-400 mr-3"></div>
                    <span className="text-blue-700 text-xl">Commercial construction projects</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-yellow-400 mr-3"></div>
                    <span className="text-blue-700 text-xl">Industrial facility development</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-yellow-400 mr-3"></div>
                    <span className="text-blue-700 text-xl">Infrastructure projects</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-yellow-400 mr-3"></div>
                    <span className="text-blue-700 text-xl">Renovation and restoration work</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Construction Hoists Section */}
        <div className="p-8 border-b border-blue-200">
          <div className="max-w-7xl mx-auto">
            <div className="flex gap-8">
              <div className="w-80 h-64">
                <img 
                  src="/api/placeholder/320/256" 
                  alt="Construction hoist on building facade"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-blue-800 mb-4 py-12">Construction Hoists</h3>
                <p className="text-blue-700 text-xl mb-4">
                  Reliable and efficient construction hoists for vertical transportation of materials and personnel on construction sites.
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-blue-700 text-xl mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center mr-3">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-blue-700 text-xl">Passenger and material configurations</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center mr-3">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-blue-700 text-xl">Lifting speeds up to 96 m/min</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center mr-3">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-blue-700 text-xl">Single and twin cage options</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center mr-3">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-blue-700 text-xl">Modular design for easy installation</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center mr-3">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-blue-700 text-xl">Advanced safety features including emergency descent systems</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Technical Specifications and Applications Grid */}
            <div className="grid grid-cols-2 gap-8 mt-16 relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-yellow-400 transform -translate-x-1/2"></div>
              <div>
                <h4 className="font-semibold text-blue-700 text-xl mb-3">Technical Specifications:</h4>
                <ul className="space-y-1">
                  <li className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-yellow-400 mr-3"></div>
                    <span className="text-blue-700 text-xl">Load Capacity: 1 - 4 tons</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-yellow-400 mr-3"></div>
                    <span className="text-blue-700 text-xl">Lifting Speed: Up to 96 m/min</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-yellow-400 mr-3"></div>
                    <span className="text-blue-700 text-xl">Max Lifting Height: Up to 450 meters</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-yellow-400 mr-3"></div>
                    <span className="text-blue-700 text-xl">Power Supply: 380-400V, 50/60Hz</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-yellow-400 mr-3"></div>
                    <span className="text-blue-700 text-xl">Cage Dimensions: Various configurations available</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 text-xl mb-3">Common Applications:</h4>
                <ul className="space-y-1">
                  <li className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-yellow-400 mr-3"></div>
                    <span className="text-blue-700 text-xl">High-rise building construction</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-yellow-400 mr-3"></div>
                    <span className="text-blue-700 text-xl">Commercial construction projects</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-yellow-400 mr-3"></div>
                    <span className="text-blue-700 text-xl">Industrial facility development</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-yellow-400 mr-3"></div>
                    <span className="text-blue-700 text-xl">Infrastructure projects</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-yellow-400 mr-3"></div>
                    <span className="text-blue-700 text-xl">Renovation and restoration work</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Scaffolding Systems Section */}
        <div className="p-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex gap-8">
              <div className="w-80 h-64">
                <img 
                  src="/api/placeholder/320/256" 
                  alt="Scaffolding system on building construction"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-blue-800 mb-4 py-12">Scaffolding Systems</h3>
                <p className="text-blue-700 text-xl mb-4">
                  Comprehensive scaffolding systems for construction, maintenance, and industrial applications.
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-blue-700 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center mr-3">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-blue-700 text-xl">Modular design for versatility</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center mr-3">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-blue-700 text-xl">Quick and easy assembly</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center mr-3">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-blue-700 text-xl">High load-bearing capacity</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center mr-3">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-blue-700 text-xl">Corrosion-resistant finishes</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center mr-3">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-blue-700 text-xl">Compatible with safety accessories</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Technical Specifications and Applications Grid */}
            <div className="grid grid-cols-2 gap-8 mt-6 relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-yellow-400 transform -translate-x-1/2"></div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-3">Technical Specifications:</h4>
                <ul className="space-y-1">
                  <li className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-yellow-400 mr-3"></div>
                    <span className="text-blue-700 text-xl">Material: Galvanized Steel/Aluminum</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-yellow-400 mr-3"></div>
                    <span className="text-blue-700 text-xl">Load Capacity: Up to 450 kg/m²</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-yellow-400 mr-3"></div>
                    <span className="text-blue-700 text-xl">Platform Width: Various options from 0.6m to 1.2m</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-yellow-400 mr-3"></div>
                    <span className="text-blue-700 text-xl">Standards Compliance: EN 12810, EN 12811</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-yellow-400 mr-3"></div>
                    <span className="text-blue-700 text-xl">Surface Treatment: Hot-dip galvanized</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-3">Common Applications:</h4>
                <ul className="space-y-1">
                  <li className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-yellow-400 mr-3"></div>
                    <span className="text-blue-700 text-xl">High-rise building construction</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-yellow-400 mr-3"></div>
                    <span className="text-blue-700 text-xl">Commercial construction projects</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-yellow-400 mr-3"></div>
                    <span className="text-blue-700 text-xl">Industrial facility development</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-yellow-400 mr-3"></div>
                    <span className="text-blue-700 text-xl">Infrastructure projects</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-yellow-400 mr-3"></div>
                    <span className="text-blue-700 text-xl">Renovation and restoration work</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DeFaGlobalBrochure;