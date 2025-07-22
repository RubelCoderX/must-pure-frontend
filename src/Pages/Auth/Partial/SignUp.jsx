import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaUser } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import SignUpTeacher from "./TeacherStudent/SignUpTeacher";
import SignUpStudent from "./TeacherStudent/SignUpStudent";

const SignUp = () => {
  return (
    <Tabs defaultValue="student" className="lg:flex-1 bg-color_4">
      <TabsList className="flex gap-8 justify-start rounded-none p-4 border-b border-color_1">
        <TabsTrigger value="student" className="flex gap-2 items-center">
          <PiStudentFill /> Student
        </TabsTrigger>
        <TabsTrigger value="teacher" className="flex gap-2 items-center">
          <FaUser /> Teacher
        </TabsTrigger>
      </TabsList>
      <TabsContent className="py-4" value="student">
        <SignUpStudent />
      </TabsContent>
      <TabsContent className="py-4" value="teacher">
        <SignUpTeacher />
      </TabsContent>
    </Tabs>
  );
};

export default SignUp;
