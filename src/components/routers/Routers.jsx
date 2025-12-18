import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Contact from '../pages/Contact';
import AboutUs from '../pages/AboutUs';
import ServiceDeliveryModel from '../pages/ServiceDeliveryModel';
import MissionValues from '../pages/MissionValues';
import CorporateResponsibility from '../pages/CorporateResponsibility';
import PartnershipSupplierDiversity from '../pages/PartnershipSupplierDiversity';
import OurSkills from '../pages/OurSkills';
import OurClients from '../pages/OurClients';
import EmployeeReferral from '../pages/EmployeeReferral';
import Corporate from '../pages/Corporate';
import SolutionsStrategicStaffing from '../pages/SolutionsStrategicStaffing';
import SolutionsBPO from '../pages/SolutionsBPO';
import SolutionsRPO from '../pages/SolutionsRPO';
import SolutionsTrainingHub from '../pages/SolutionsTrainingHub';
import IndustriesBankingFinancial from '../pages/IndustriesBankingFinancial';
import IndustriesEducation from '../pages/IndustriesEducation';
import IndustriesEnergyUtility from '../pages/IndustriesEnergyUtility';
import IndustriesGovernment from '../pages/IndustriesGovernment';
import IndustriesHealthcareLifeScience from '../pages/IndustriesHealthcareLifeScience';
import IndustriesInsurance from '../pages/IndustriesInsurance';
import IndustriesLogisticsWarehousing from '../pages/IndustriesLogisticsWarehousing';
import IndustriesRetailConsumerGoods from '../pages/IndustriesRetailConsumerGoods';
import IndustriesTelecomMedia from '../pages/IndustriesTelecomMedia';
import IndustriesOilGas from '../pages/IndustriesOilGas';
import IndustriesTravelHospitality from '../pages/IndustriesTravelHospitality';
import IndustriesECommerce from '../pages/IndustriesECommerce';
import TechnologiesAI from '../pages/TechnologiesAI';
import TechnologiesAIRpa from '../pages/TechnologiesAIRpa';
import TechnologiesAIBlockchain from '../pages/TechnologiesAIBlockchain';
import TechnologiesAICloudProfessionalServices from '../pages/TechnologiesAICloudProfessionalServices';
import TechnologiesAIDataAnalytics from '../pages/TechnologiesAIDataAnalytics';
import TechnologiesAIMobility from '../pages/TechnologiesAIMobility';
import TechnologiesAIIoT from '../pages/TechnologiesAIIoT';
import TechnologiesAIAdvancedAnalytics from '../pages/TechnologiesAIAdvancedAnalytics';
import TechnologiesDevOpsBoxed from '../pages/TechnologiesDevOpsBoxed';
import TechnologiesDevOpsContinuousIntegration from '../pages/TechnologiesDevOpsContinuousIntegration';
import TechnologiesDevOpsContinuousDelivery from '../pages/TechnologiesDevOpsContinuousDelivery';
import TechnologiesDevOpsMicroservices from '../pages/TechnologiesDevOpsMicroservices';
import TechnologiesDevOpsInfrastructureAsCode from '../pages/TechnologiesDevOpsInfrastructureAsCode';
import TechnologiesCloudAws from '../pages/TechnologiesCloudAws';
import TechnologiesCloudAzure from '../pages/TechnologiesCloudAzure';
import TechnologiesCloudSaas from '../pages/TechnologiesCloudSaas';
import TechnologiesCloudPaas from '../pages/TechnologiesCloudPaas';
import TechnologiesCloudComputing from '../pages/TechnologiesCloudComputing';
import TechnologiesBigdata from '../pages/TechnologiesBigdata';
import TechnologiesBigdataHadoop from '../pages/TechnologiesBigdataHadoop';
import TechnologiesBigdataSpark from '../pages/TechnologiesBigdataSpark';
import TechnologiesBigdataKafka from '../pages/TechnologiesBigdataKafka';
import TechnologiesBigdataApacheHive from '../pages/TechnologiesBigdataApacheHive';
import TechnologiesWebDevelopment from '../pages/TechnologiesWebDevelopment';
import TechnologiesLatestThinking from '../pages/TechnologiesLatestThinking';
import CareersOverview from '../pages/CareersOverview';
import CareersCultureMetrixit from '../pages/CareersCultureMetrixit';
import CareersCurrentOpenings from '../pages/CareersCurrentOpenings';
import CareersJoinUs from '../pages/CareersJoinUs';
import CareersEmployeeBenefits from '../pages/CareersEmployeeBenefits';
import CareersImmigration from '../pages/CareersImmigration';

function Routers() {
  return (
        <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />

      {/* LIFE @ METRIXIT SOLUTIONS sub-pages */}
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/service-delivery-model" element={<ServiceDeliveryModel />} />
      <Route path="/mission-values" element={<MissionValues />} />
      <Route
        path="/corporate-responsibility"
        element={<CorporateResponsibility />}
      />
      <Route
        path="/partnership-supplier-diversity"
        element={<PartnershipSupplierDiversity />}
      />
      <Route path="/our-skills" element={<OurSkills />} />
      <Route path="/our-clients" element={<OurClients />} />
      <Route path="/employee-referral" element={<EmployeeReferral />} />
      <Route path="/corporate" element={<Corporate />} />

      {/* Solutions sub-pages */}
      <Route
        path="/solutions/strategic-staffing"
        element={<SolutionsStrategicStaffing />}
      />
      <Route
        path="/solutions/business-process-outsourcing"
        element={<SolutionsBPO />}
      />
      <Route
        path="/solutions/recruitment-process-outsourcing"
        element={<SolutionsRPO />}
      />
      <Route path="/solutions/training-hub" element={<SolutionsTrainingHub />} />

      {/* Industries sub-pages */}
      <Route
        path="/industries/banking-financial"
        element={<IndustriesBankingFinancial />}
      />
      <Route path="/industries/education" element={<IndustriesEducation />} />
      <Route
        path="/industries/energy-utility"
        element={<IndustriesEnergyUtility />}
      />
      <Route path="/industries/government" element={<IndustriesGovernment />} />
      <Route
        path="/industries/healthcare-life-science"
        element={<IndustriesHealthcareLifeScience />}
      />
      <Route path="/industries/insurance" element={<IndustriesInsurance />} />
      <Route
        path="/industries/logistics-warehousing"
        element={<IndustriesLogisticsWarehousing />}
      />
      <Route
        path="/industries/retail-consumer-goods"
        element={<IndustriesRetailConsumerGoods />}
      />
      <Route
        path="/industries/telecom-media"
        element={<IndustriesTelecomMedia />}
      />
      <Route path="/industries/oil-gas" element={<IndustriesOilGas />} />
      <Route
        path="/industries/travel-hospitality"
        element={<IndustriesTravelHospitality />}
      />
      <Route
        path="/industries/e-commerce"
        element={<IndustriesECommerce />}
      />

      {/* Technologies sub-pages */}
      <Route path="/technologies/ai" element={<TechnologiesAI />} />
      <Route path="/technologies/ai/rpa" element={<TechnologiesAIRpa />} />
      <Route
        path="/technologies/ai/blockchain"
        element={<TechnologiesAIBlockchain />}
      />
      <Route
        path="/technologies/ai/cloud-professional-services"
        element={<TechnologiesAICloudProfessionalServices />}
      />
      <Route
        path="/technologies/ai/data-analytics"
        element={<TechnologiesAIDataAnalytics />}
      />
      <Route
        path="/technologies/ai/mobility"
        element={<TechnologiesAIMobility />}
      />
      <Route path="/technologies/ai/iot" element={<TechnologiesAIIoT />} />
      <Route
        path="/technologies/ai/advanced-analytics"
        element={<TechnologiesAIAdvancedAnalytics />}
      />
      <Route
        path="/technologies/devops-boxed/continuous-integration"
        element={<TechnologiesDevOpsContinuousIntegration />}
      />
      <Route
        path="/technologies/devops-boxed/continuous-delivery"
        element={<TechnologiesDevOpsContinuousDelivery />}
      />
      <Route
        path="/technologies/devops-boxed/microservices"
        element={<TechnologiesDevOpsMicroservices />}
      />
      <Route
        path="/technologies/devops-boxed/infrastructure-as-code"
        element={<TechnologiesDevOpsInfrastructureAsCode />}
      />
      <Route
        path="/technologies/cloud-computing/aws-cloud"
        element={<TechnologiesCloudAws />}
      />
      <Route
        path="/technologies/cloud-computing/microsoft-azure"
        element={<TechnologiesCloudAzure />}
      />
      <Route
        path="/technologies/cloud-computing/saas"
        element={<TechnologiesCloudSaas />}
      />
      <Route
        path="/technologies/cloud-computing/paas"
        element={<TechnologiesCloudPaas />}
      />
      <Route path="/technologies/bigdata" element={<TechnologiesBigdata />} />
      <Route
        path="/technologies/bigdata/hadoop"
        element={<TechnologiesBigdataHadoop />}
      />
      <Route
        path="/technologies/bigdata/spark"
        element={<TechnologiesBigdataSpark />}
      />
      <Route
        path="/technologies/bigdata/kafka"
        element={<TechnologiesBigdataKafka />}
      />
      <Route
        path="/technologies/bigdata/apache-hive"
        element={<TechnologiesBigdataApacheHive />}
      />
      <Route
        path="/technologies/devops-boxed"
        element={<TechnologiesDevOpsBoxed />}
      />
      <Route
        path="/technologies/cloud-computing"
        element={<TechnologiesCloudComputing />}
      />
      <Route
        path="/technologies/web-development"
        element={<TechnologiesWebDevelopment />}
      />
      <Route
        path="/technologies/latest-thinking"
        element={<TechnologiesLatestThinking />}
      />

      {/* Careers sub-pages */}
      <Route path="/careers/overview" element={<CareersOverview />} />
      <Route
        path="/careers/culture-metrixit"
        element={<CareersCultureMetrixit />}
      />
      <Route
        path="/careers/current-openings"
        element={<CareersCurrentOpenings />}
      />
      <Route path="/careers/join-us" element={<CareersJoinUs />} />
      <Route
        path="/careers/employee-benefits"
        element={<CareersEmployeeBenefits />}
      />
      <Route path="/careers/immigration" element={<CareersImmigration />} />
        </Routes>
  );
}

export default Routers;
