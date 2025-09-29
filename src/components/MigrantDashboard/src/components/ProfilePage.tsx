import React, { useState } from 'react';
import { 
  User, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar,
  Shield,
  Edit,
  Camera,
  QrCode,
  Download,
  Eye,
  History,
  Bell,
  Settings,
  LogOut,
  RefreshCw,
  ChevronRight,
  CheckCircle,
  Upload,
  Save,
  X
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Separator } from './ui/separator';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';
import { Toaster } from './ui/sonner';
import { motion } from 'framer-motion';

export const ProfilePage = React.memo(function ProfilePage() {
  // Edit mode states
  const [editPersonalInfo, setEditPersonalInfo] = useState(false);
  const [editContactInfo, setEditContactInfo] = useState(false);
  const [editAddressInfo, setEditAddressInfo] = useState(false);

  // Form data states
  const [personalData, setPersonalData] = useState({
    fullName: 'Ravi Kumar Singh',
    gender: 'Male',
    dateOfBirth: '15th March, 1992',
    age: '32 years',
    bloodGroup: 'O+',
    maritalStatus: 'Married'
  });

  const [contactData, setContactData] = useState({
    mobile: '+91 98765-43210',
    email: 'ravi.singh@gmail.com',
    emergencyContact: '+91 87654-32109',
    emergencyName: 'Sunita Singh (Wife)'
  });

  const [addressData, setAddressData] = useState({
    currentAddress: 'Room 204, Krishna Building\nKandivali West, Mumbai\n400067\nMaharashtra, India',
    permanentAddress: 'Village Rampur, P.O.\nRampur\nDistrict - Sitapur, UP -\n261001\nIndia'
  });

  // Save functions
  const savePersonalInfo = () => {
    setEditPersonalInfo(false);
    toast.success('Personal information updated successfully');
  };

  const saveContactInfo = () => {
    setEditContactInfo(false);
    toast.success('Contact information updated successfully');
  };

  const saveAddressInfo = () => {
    setEditAddressInfo(false);
    toast.success('Address information updated successfully');
  };

  // Cancel functions
  const cancelPersonalEdit = () => {
    setEditPersonalInfo(false);
    // Reset to original values if needed
  };

  const cancelContactEdit = () => {
    setEditContactInfo(false);
    // Reset to original values if needed
  };

  const cancelAddressEdit = () => {
    setEditAddressInfo(false);
    // Reset to original values if needed
  };

  return (
    <div className="min-h-screen bg-gov-blue-bg">
      {/* Header with National Health Authority Branding */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-white border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="flex items-center space-x-2 sm:space-x-3"
          >
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-gov-blue rounded-lg flex items-center justify-center shadow-md hover:shadow-lg cursor-pointer"
            >
              <motion.div 
                whileHover={{ scale: 1.2 }}
                className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-sm flex items-center justify-center"
              >
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gov-saffron rounded-full"></div>
              </motion.div>
            </motion.div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-gov-blue hover:text-gov-blue-light transition-colors duration-200">
                National Health Authority
              </h1>
              <p className="text-xs sm:text-sm text-gray-600">Government of India</p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="flex items-center space-x-2 sm:space-x-3 self-start sm:self-auto"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-gov-blue hover:bg-gov-blue/90 text-white text-sm px-3 py-2 transition-all duration-200 hover:shadow-lg">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Edit className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                </motion.div>
                <span className="hidden sm:inline">Edit Profile</span>
                <span className="sm:hidden">Edit</span>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gov-blue p-2 transition-all duration-200 hover:bg-gov-blue-bg">
                <motion.div
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.div>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="max-w-7xl mx-auto p-3 sm:p-4"
      >
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 sm:gap-3">
          {/* Profile Summary Card - Full width on mobile, sidebar on desktop */}
          <motion.div 
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="lg:col-span-1 order-1 lg:order-none"
          >
            <Card className="bg-white shadow-sm border-gov-blue-light/20 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-2 sm:p-3">
                {/* Profile Picture and Basic Info */}
                <div className="text-center mb-2">
                  <div className="relative inline-block">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-gov-blue rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base mx-auto mb-1 sm:mb-2 shadow-lg hover:shadow-xl cursor-pointer"
                    >
                      RK
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                      className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-gray-600 rounded-full flex items-center justify-center border border-white cursor-pointer hover:bg-gov-blue transition-colors duration-200"
                    >
                      <Camera className="w-2 h-2 text-white" />
                    </motion.div>
                  </div>
                  <motion.h2 
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.3 }}
                    className="text-sm sm:text-base font-bold text-gray-800 hover:text-gov-blue transition-colors duration-200"
                  >
                    Ravi Kumar Singh
                  </motion.h2>
                  <motion.p 
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.3 }}
                    className="text-xs text-gray-600 font-medium"
                  >
                    Health ID: MH2024789123
                  </motion.p>
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.3, type: "spring", stiffness: 500 }}
                    className="flex flex-wrap items-center justify-center gap-1 mt-2"
                  >
                    <motion.div whileHover={{ scale: 1.1 }}>
                      <Badge className="bg-gov-green text-white text-xs px-1 py-0.5 hover:bg-gov-green/90 transition-colors duration-200">
                        <Shield className="w-2 h-2 mr-1" />
                        Verified
                      </Badge>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }}>
                      <Badge className="bg-gov-blue text-white text-xs px-1 py-0.5 hover:bg-gov-blue/90 transition-colors duration-200">
                        Active Worker
                      </Badge>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Profile Actions */}
                <div className="space-y-1">
                  <motion.h3 
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.3 }}
                    className="font-semibold text-gray-800 mb-1 text-xs"
                  >
                    Profile Actions
                  </motion.h3>
                  {[
                    { icon: History, label: 'View History', color: 'text-gray-600 hover:text-gov-blue hover:bg-gov-blue-bg' },
                    { icon: Bell, label: 'Notifications', color: 'text-gray-600 hover:text-gov-blue hover:bg-gov-blue-bg' },
                    { icon: Settings, label: 'Security Settings', color: 'text-gray-600 hover:text-gov-blue hover:bg-gov-blue-bg' },
                    { icon: LogOut, label: 'Logout', color: 'text-red-600 hover:text-red-700 hover:bg-red-50' }
                  ].map((action, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 + 1, duration: 0.2 }}
                      whileHover={{ x: 4 }}
                    >
                      <Button variant="ghost" className={`w-full justify-start ${action.color} h-7 text-xs transition-all duration-200 group`}>
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <action.icon className="w-3 h-3 mr-2 group-hover:scale-110 transition-transform duration-200" />
                        </motion.div>
                        {action.label}
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Main Content Area */}
          <motion.div 
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="lg:col-span-3 space-y-2 sm:space-y-3 order-2 lg:order-none"
          >
            {/* Personal Information */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              whileHover={{ y: -2 }}
            >
              <Card className="bg-white shadow-sm border-gov-blue-light/20 hover:shadow-lg transition-all duration-300">
                <CardHeader className="border-b border-gray-100 p-2 sm:p-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center space-x-2 text-gov-blue text-xs sm:text-sm">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <User className="w-3 h-3" />
                      </motion.div>
                      <span>Personal Information</span>
                    </CardTitle>
                    <div className="flex items-center space-x-2">
                      {editPersonalInfo ? (
                        <>
                          <Button size="sm" onClick={savePersonalInfo} className="bg-gov-green hover:bg-gov-green/90 text-white">
                            <Save className="w-3 h-3 mr-1" />
                            Save
                          </Button>
                          <Button size="sm" variant="outline" onClick={cancelPersonalEdit} className="border-gray-300 text-gray-600 hover:bg-gray-50">
                            <X className="w-3 h-3 mr-1" />
                            Cancel
                          </Button>
                        </>
                      ) : (
                        <Button size="sm" onClick={() => setEditPersonalInfo(true)} className="bg-gov-blue hover:bg-gov-blue/90 text-white">
                          <Edit className="w-3 h-3 mr-1" />
                          Edit
                        </Button>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-2 sm:p-3">
                  {editPersonalInfo ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                      <div className="space-y-2">
                        <Label htmlFor="fullName" className="text-xs sm:text-sm font-medium text-gray-600">Full Name:</Label>
                        <Input
                          id="fullName"
                          value={personalData.fullName}
                          onChange={(e) => setPersonalData({...personalData, fullName: e.target.value})}
                          className="border-gov-blue-light focus:ring-gov-blue"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="gender" className="text-xs sm:text-sm font-medium text-gray-600">Gender:</Label>
                        <Select value={personalData.gender} onValueChange={(value) => setPersonalData({...personalData, gender: value})}>
                          <SelectTrigger className="border-gov-blue-light">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Male">Male</SelectItem>
                            <SelectItem value="Female">Female</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="dateOfBirth" className="text-xs sm:text-sm font-medium text-gray-600">Date of Birth:</Label>
                        <Input
                          id="dateOfBirth"
                          value={personalData.dateOfBirth}
                          onChange={(e) => setPersonalData({...personalData, dateOfBirth: e.target.value})}
                          className="border-gov-blue-light focus:ring-gov-blue"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="age" className="text-xs sm:text-sm font-medium text-gray-600">Age:</Label>
                        <Input
                          id="age"
                          value={personalData.age}
                          onChange={(e) => setPersonalData({...personalData, age: e.target.value})}
                          className="border-gov-blue-light focus:ring-gov-blue"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bloodGroup" className="text-xs sm:text-sm font-medium text-gray-600">Blood Group:</Label>
                        <Select value={personalData.bloodGroup} onValueChange={(value) => setPersonalData({...personalData, bloodGroup: value})}>
                          <SelectTrigger className="border-gov-blue-light">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="A+">A+</SelectItem>
                            <SelectItem value="A-">A-</SelectItem>
                            <SelectItem value="B+">B+</SelectItem>
                            <SelectItem value="B-">B-</SelectItem>
                            <SelectItem value="AB+">AB+</SelectItem>
                            <SelectItem value="AB-">AB-</SelectItem>
                            <SelectItem value="O+">O+</SelectItem>
                            <SelectItem value="O-">O-</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="maritalStatus" className="text-xs sm:text-sm font-medium text-gray-600">Marital Status:</Label>
                        <Select value={personalData.maritalStatus} onValueChange={(value) => setPersonalData({...personalData, maritalStatus: value})}>
                          <SelectTrigger className="border-gov-blue-light">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Single">Single</SelectItem>
                            <SelectItem value="Married">Married</SelectItem>
                            <SelectItem value="Divorced">Divorced</SelectItem>
                            <SelectItem value="Widowed">Widowed</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                      {[
                        { label: 'Full Name:', value: personalData.fullName },
                        { label: 'Gender:', value: personalData.gender },
                        { label: 'Date of Birth:', value: personalData.dateOfBirth },
                        { label: 'Age:', value: personalData.age },
                        { label: 'Blood Group:', value: personalData.bloodGroup },
                        { label: 'Marital Status:', value: personalData.maritalStatus }
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1 + 0.7, duration: 0.3 }}
                          whileHover={{ scale: 1.02, y: -2 }}
                          className="p-1 rounded-lg hover:bg-gov-blue-bg transition-all duration-200 cursor-pointer"
                        >
                          <label className="text-xs font-medium text-gray-600">{item.label}</label>
                          <p className="text-xs sm:text-sm font-semibold text-gray-800 mt-0.5 hover:text-gov-blue transition-colors duration-200">
                            {item.value}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-3">
              {/* Contact Information */}
              <Card className="bg-white shadow-sm border-gov-blue-light/20">
                <CardHeader className="border-b border-gray-100 p-2 sm:p-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center space-x-2 text-gov-blue text-xs sm:text-sm">
                      <Phone className="w-3 h-3" />
                      <span>Contact Information</span>
                    </CardTitle>
                    <div className="flex items-center space-x-2">
                      {editContactInfo ? (
                        <>
                          <Button size="sm" onClick={saveContactInfo} className="bg-gov-green hover:bg-gov-green/90 text-white">
                            <Save className="w-3 h-3 mr-1" />
                            Save
                          </Button>
                          <Button size="sm" variant="outline" onClick={cancelContactEdit} className="border-gray-300 text-gray-600 hover:bg-gray-50">
                            <X className="w-3 h-3 mr-1" />
                            Cancel
                          </Button>
                        </>
                      ) : (
                        <Button size="sm" onClick={() => setEditContactInfo(true)} className="bg-gov-blue hover:bg-gov-blue/90 text-white">
                          <Edit className="w-3 h-3 mr-1" />
                          Edit
                        </Button>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-2 sm:p-3 space-y-1 sm:space-y-2">
                  {editContactInfo ? (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="mobile" className="text-xs sm:text-sm font-medium text-gray-600">Mobile Number:</Label>
                        <Input
                          id="mobile"
                          value={contactData.mobile}
                          onChange={(e) => setContactData({...contactData, mobile: e.target.value})}
                          className="border-gov-blue-light focus:ring-gov-blue"
                          placeholder="+91 XXXXX-XXXXX"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-xs sm:text-sm font-medium text-gray-600">Email Address:</Label>
                        <Input
                          id="email"
                          type="email"
                          value={contactData.email}
                          onChange={(e) => setContactData({...contactData, email: e.target.value})}
                          className="border-gov-blue-light focus:ring-gov-blue"
                          placeholder="your.email@example.com"
                        />
                      </div>
                      <div className="border-l-4 border-red-500 pl-3 sm:pl-4 bg-red-50 p-3 rounded-r-md space-y-2">
                        <Label htmlFor="emergencyContact" className="text-xs sm:text-sm font-medium text-red-700">Emergency Contact:</Label>
                        <Input
                          id="emergencyContact"
                          value={contactData.emergencyContact}
                          onChange={(e) => setContactData({...contactData, emergencyContact: e.target.value})}
                          className="border-red-300 focus:ring-red-500 bg-white"
                          placeholder="+91 XXXXX-XXXXX"
                        />
                        <Input
                          id="emergencyName"
                          value={contactData.emergencyName}
                          onChange={(e) => setContactData({...contactData, emergencyName: e.target.value})}
                          className="border-red-300 focus:ring-red-500 bg-white text-xs"
                          placeholder="Name (Relationship)"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <label className="text-xs font-medium text-gray-600">Mobile Number:</label>
                        <p className="text-xs sm:text-sm font-semibold text-gray-800 mt-0.5">{contactData.mobile}</p>
                      </div>
                      <div>
                        <label className="text-xs font-medium text-gray-600">Email Address:</label>
                        <p className="text-xs sm:text-sm font-semibold text-gray-800 mt-0.5">{contactData.email}</p>
                      </div>
                      <div className="border-l-4 border-red-500 pl-2 bg-red-50 p-2 rounded-r-md">
                        <label className="text-xs font-medium text-red-700">Emergency Contact:</label>
                        <p className="text-xs sm:text-sm font-bold text-red-800 mt-0.5">{contactData.emergencyContact}</p>
                        <p className="text-xs text-red-600 mt-0.5">{contactData.emergencyName}</p>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>

              {/* Address Information */}
              <Card className="bg-white shadow-sm border-gov-blue-light/20">
                <CardHeader className="border-b border-gray-100 p-2 sm:p-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center space-x-2 text-gov-blue text-xs sm:text-sm">
                      <MapPin className="w-3 h-3" />
                      <span>Address Information</span>
                    </CardTitle>
                    <div className="flex items-center space-x-2">
                      {editAddressInfo ? (
                        <>
                          <Button size="sm" onClick={saveAddressInfo} className="bg-gov-green hover:bg-gov-green/90 text-white">
                            <Save className="w-3 h-3 mr-1" />
                            Save
                          </Button>
                          <Button size="sm" variant="outline" onClick={cancelAddressEdit} className="border-gray-300 text-gray-600 hover:bg-gray-50">
                            <X className="w-3 h-3 mr-1" />
                            Cancel
                          </Button>
                        </>
                      ) : (
                        <Button size="sm" onClick={() => setEditAddressInfo(true)} className="bg-gov-blue hover:bg-gov-blue/90 text-white">
                          <Edit className="w-3 h-3 mr-1" />
                          Edit
                        </Button>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-2 sm:p-3 space-y-1 sm:space-y-2">
                  {editAddressInfo ? (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="currentAddress" className="text-xs sm:text-sm font-medium text-gray-600">Current Address</Label>
                        <Textarea
                          id="currentAddress"
                          value={addressData.currentAddress}
                          onChange={(e) => setAddressData({...addressData, currentAddress: e.target.value})}
                          className="border-gov-blue-light focus:ring-gov-blue min-h-[80px]"
                          placeholder="Enter your current address"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="permanentAddress" className="text-xs sm:text-sm font-medium text-gray-600">Permanent Address</Label>
                        <Textarea
                          id="permanentAddress"
                          value={addressData.permanentAddress}
                          onChange={(e) => setAddressData({...addressData, permanentAddress: e.target.value})}
                          className="border-gov-blue-light focus:ring-gov-blue min-h-[80px]"
                          placeholder="Enter your permanent address"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <label className="text-xs font-medium text-gray-600">Current Address</label>
                        <div className="mt-0.5 p-1.5 bg-gov-blue-bg rounded-md">
                          <p className="text-xs text-gray-800 leading-relaxed whitespace-pre-line">
                            {addressData.currentAddress}
                          </p>
                        </div>
                      </div>
                      <div>
                        <label className="text-xs font-medium text-gray-600">Permanent Address</label>
                        <div className="mt-0.5 p-1.5 bg-gov-blue-bg rounded-md">
                          <p className="text-xs text-gray-800 leading-relaxed whitespace-pre-line">
                            {addressData.permanentAddress}
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Government Documents */}
            <Card className="bg-white shadow-lg border-2 border-gov-blue-light/30">
              <CardHeader className="border-b-2 border-gov-blue-light/20 p-2 sm:p-3 bg-gradient-to-r from-gov-blue-bg to-white">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                  <CardTitle className="flex items-center space-x-2 text-gov-blue text-sm sm:text-base">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gov-blue rounded-full flex items-center justify-center">
                      <Shield className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                    </div>
                    <div>
                      <span className="block">Government Documents</span>
                      <span className="text-xs font-normal text-gray-600">Official ID Verification Portal</span>
                    </div>
                  </CardTitle>
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-gov-green text-white text-xs px-3 py-1">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      All Verified
                    </Badge>
                    <Button size="sm" className="bg-gov-saffron hover:bg-gov-saffron/90 text-white">
                      <Upload className="w-3 h-3 mr-1" />
                      Upload New
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-2 sm:p-3">
                {/* Document Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2 mb-3">
                  <div className="text-center p-2 bg-gov-green-bg rounded-lg border border-gov-green/20">
                    <div className="text-base sm:text-lg font-bold text-gov-green">4</div>
                    <div className="text-xs text-gray-600">Verified</div>
                  </div>
                  <div className="text-center p-2 bg-gov-blue-bg rounded-lg border border-gov-blue/20">
                    <div className="text-base sm:text-lg font-bold text-gov-blue">100%</div>
                    <div className="text-xs text-gray-600">Complete</div>
                  </div>
                  <div className="text-center p-2 bg-gov-saffron-bg rounded-lg border border-gov-saffron/20">
                    <div className="text-base sm:text-lg font-bold text-gov-saffron">2024</div>
                    <div className="text-xs text-gray-600">Updated</div>
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="text-base sm:text-lg font-bold text-gray-700">0</div>
                    <div className="text-xs text-gray-600">Pending</div>
                  </div>
                </div>

                {/* Document Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  {/* Aadhaar Card */}
                  <div className="border-2 border-gov-blue-light/30 rounded-xl p-3 sm:p-4 hover:shadow-xl hover:border-gov-blue transition-all duration-300 bg-gradient-to-br from-white to-gov-blue-bg group">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-gov-blue to-gov-blue-light rounded-lg flex items-center justify-center shadow-md">
                          <div className="text-white font-bold text-lg">🆔</div>
                        </div>
                        <div>
                          <h4 className="text-base sm:text-lg font-bold text-gray-800">Aadhaar Card</h4>
                          <p className="text-xs sm:text-sm text-gray-600">Unique Identification Authority</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end space-y-1">
                        <Badge className="bg-gov-green text-white text-xs px-2 py-1">
                          <Shield className="w-2 h-2 mr-1" />
                          Verified
                        </Badge>
                        <span className="text-xs text-gray-500">Valid Till: Lifetime</span>
                      </div>
                    </div>
                    
                    <div className="mb-4 p-3 bg-white/80 rounded-lg border border-gray-200">
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm font-medium text-gray-600">Aadhaar Number:</span>
                        <span className="text-sm sm:text-base font-bold text-gray-800 font-mono">**** **** 7890</span>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs sm:text-sm font-medium text-gray-600">Last Updated:</span>
                        <span className="text-xs sm:text-sm text-gray-700">15 Jan 2024</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button size="sm" variant="outline" className="flex-1 border-2 border-gov-blue text-gov-blue hover:bg-gov-blue hover:text-white transition-all duration-200">
                        <Eye className="w-3 h-3 mr-2" />
                        View Document
                      </Button>
                      <Button size="sm" className="flex-1 bg-gov-blue hover:bg-gov-blue/90 text-white">
                        <Download className="w-3 h-3 mr-2" />
                        Download PDF
                      </Button>
                    </div>
                  </div>

                  {/* PAN Card */}
                  <div className="border-2 border-gov-blue-light/30 rounded-xl p-4 sm:p-5 hover:shadow-xl hover:border-gov-blue transition-all duration-300 bg-gradient-to-br from-white to-gov-blue-bg group">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-gov-green to-gov-blue rounded-lg flex items-center justify-center shadow-md">
                          <div className="text-white font-bold text-lg">💳</div>
                        </div>
                        <div>
                          <h4 className="text-base sm:text-lg font-bold text-gray-800">PAN Card</h4>
                          <p className="text-xs sm:text-sm text-gray-600">Income Tax Department</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end space-y-1">
                        <Badge className="bg-gov-green text-white text-xs px-2 py-1">
                          <Shield className="w-2 h-2 mr-1" />
                          Verified
                        </Badge>
                        <span className="text-xs text-gray-500">Valid Till: Lifetime</span>
                      </div>
                    </div>
                    
                    <div className="mb-4 p-3 bg-white/80 rounded-lg border border-gray-200">
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm font-medium text-gray-600">PAN Number:</span>
                        <span className="text-sm sm:text-base font-bold text-gray-800 font-mono">ABCDE1234F</span>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs sm:text-sm font-medium text-gray-600">Last Updated:</span>
                        <span className="text-xs sm:text-sm text-gray-700">20 Dec 2023</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button size="sm" variant="outline" className="flex-1 border-2 border-gov-blue text-gov-blue hover:bg-gov-blue hover:text-white transition-all duration-200">
                        <Eye className="w-3 h-3 mr-2" />
                        View Document
                      </Button>
                      <Button size="sm" className="flex-1 bg-gov-blue hover:bg-gov-blue/90 text-white">
                        <Download className="w-3 h-3 mr-2" />
                        Download PDF
                      </Button>
                    </div>
                  </div>

                  {/* Voter ID */}
                  <div className="border-2 border-gov-blue-light/30 rounded-xl p-4 sm:p-5 hover:shadow-xl hover:border-gov-blue transition-all duration-300 bg-gradient-to-br from-white to-gov-blue-bg group">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-gov-saffron to-gov-green rounded-lg flex items-center justify-center shadow-md">
                          <div className="text-white font-bold text-lg">🗳️</div>
                        </div>
                        <div>
                          <h4 className="text-base sm:text-lg font-bold text-gray-800">Voter ID</h4>
                          <p className="text-xs sm:text-sm text-gray-600">Election Commission of India</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end space-y-1">
                        <Badge className="bg-gov-green text-white text-xs px-2 py-1">
                          <Shield className="w-2 h-2 mr-1" />
                          Verified
                        </Badge>
                        <span className="text-xs text-gray-500">Valid Till: Lifetime</span>
                      </div>
                    </div>
                    
                    <div className="mb-4 p-3 bg-white/80 rounded-lg border border-gray-200">
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm font-medium text-gray-600">EPIC Number:</span>
                        <span className="text-sm sm:text-base font-bold text-gray-800 font-mono">ABC1234567</span>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs sm:text-sm font-medium text-gray-600">Last Updated:</span>
                        <span className="text-xs sm:text-sm text-gray-700">10 Nov 2023</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button size="sm" variant="outline" className="flex-1 border-2 border-gov-blue text-gov-blue hover:bg-gov-blue hover:text-white transition-all duration-200">
                        <Eye className="w-3 h-3 mr-2" />
                        View Document
                      </Button>
                      <Button size="sm" className="flex-1 bg-gov-blue hover:bg-gov-blue/90 text-white">
                        <Download className="w-3 h-3 mr-2" />
                        Download PDF
                      </Button>
                    </div>
                  </div>

                  {/* Health ID QR */}
                  <div className="border-2 border-gov-blue-light/30 rounded-xl p-4 sm:p-5 hover:shadow-xl hover:border-gov-blue transition-all duration-300 bg-gradient-to-br from-white to-gov-blue-bg group">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-gov-green to-gov-saffron rounded-lg flex items-center justify-center shadow-md">
                          <QrCode className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-base sm:text-lg font-bold text-gray-800">Health ID QR</h4>
                          <p className="text-xs sm:text-sm text-gray-600">National Health Authority</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end space-y-1">
                        <Badge className="bg-gov-blue text-white text-xs px-2 py-1">
                          <QrCode className="w-2 h-2 mr-1" />
                          Active
                        </Badge>
                        <span className="text-xs text-gray-500">Valid Till: Dec 2025</span>
                      </div>
                    </div>
                    
                    <div className="mb-4 p-3 bg-white/80 rounded-lg border border-gray-200">
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm font-medium text-gray-600">Health ID:</span>
                        <span className="text-sm sm:text-base font-bold text-gray-800 font-mono">MH2024789123</span>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs sm:text-sm font-medium text-gray-600">Generated:</span>
                        <span className="text-xs sm:text-sm text-gray-700">01 Jan 2024</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button size="sm" variant="outline" className="flex-1 border-2 border-gov-blue text-gov-blue hover:bg-gov-blue hover:text-white transition-all duration-200">
                        <QrCode className="w-3 h-3 mr-2" />
                        Show QR Code
                      </Button>
                      <Button size="sm" className="flex-1 bg-gov-blue hover:bg-gov-blue/90 text-white">
                        <Download className="w-3 h-3 mr-2" />
                        Download QR
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Security Notice */}
                <div className="mt-6 p-4 bg-gradient-to-r from-gov-green-bg to-gov-blue-bg rounded-lg border-2 border-gov-green/20">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gov-green rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-gov-green text-sm sm:text-base mb-1">Secure Document Storage</h5>
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                        All documents are encrypted and stored securely as per Government of India data protection standards. 
                        Your personal information is protected with military-grade security protocols.
                      </p>
                      <div className="flex items-center space-x-4 mt-2 text-xs text-gray-600">
                        <span>🔒 256-bit Encryption</span>
                        <span>🛡️ ISO 27001 Certified</span>
                        <span>🏛️ Govt. Approved</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>

      <Toaster />
    </div>
  );
});