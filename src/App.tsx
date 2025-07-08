@@ .. @@
       </div>
     </section>
 
+    {/* About the Team Section */}
+    <section className="py-20 bg-cream">
+      <div className="container mx-auto px-8">
+        <h2 className="text-4xl font-bold text-center text-brown mb-16">About the Team</h2>
+        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
+          <div className="text-center">
+            <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
+              <img 
+                src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop" 
+                alt="Daniel McNair" 
+                className="w-full h-full object-cover"
+              />
+            </div>
+            <h3 className="text-2xl font-semibold text-brown mb-4">Daniel McNair</h3>
+            <p className="text-dark leading-relaxed">
+              Daniel has been on mission trips all over the world and shares that passion with his wife, Irma. He's also our resident coffee expert who carries SCA certification.
+            </p>
+          </div>
+          <div className="text-center">
+            <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
+              <img 
+                src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop" 
+                alt="Joseph Gainor" 
+                className="w-full h-full object-cover"
+              />
+            </div>
+            <h3 className="text-2xl font-semibold text-brown mb-4">Joseph Gainor</h3>
+            <p className="text-dark leading-relaxed">
+              Originally from Honduras, Joseph is now a local businessman here in Conway. Joseph loves creating opportunities for often overlooked people to be seen and known in his community.
+            </p>
+          </div>
+          <div className="text-center">
+            <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
+              <img 
+                src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop" 
+                alt="Mark McNair" 
+                className="w-full h-full object-cover"
+              />
+            </div>
+            <h3 className="text-2xl font-semibold text-brown mb-4">Mark McNair</h3>
+            <p className="text-dark leading-relaxed">
+              Mark is the Missions Director at City Church and is a passionate advocate of reaching the <em>most</em> unreached people groups of the world with The Gospel; fulfilling Revelation 7:9-10
+            </p>
+          </div>
+        </div>
+      </div>
+    </section>
+
     {/* About the Mission Section */}
     <section className="py-20 bg-light">
@@ .. @@
           <p className="text-xl text-dark leading-relaxed mb-8">
             Our heart is to see the Gospel reach every tribe, tongue, and nation. We believe that prayer is the foundation of all effective ministry, and we want to invite you to join us in this sacred work.
           </p>
           <p className="text-xl text-dark leading-relaxed">
-            Through prayer notifications and updates, we'll keep you connected to what God is doing in Colombia and how you can be part of His work among the unreached.
+            Through prayer notifications and updates sent live from Colombia, our team will keep you connected to what God is doing and how you can be part of His work among the unreached. You'll be able to pray with us in real-time as we minister to these precious people groups.
           </p>
         </div>
       </div>
@@ .. @@
           <p className="text-xl text-dark leading-relaxed mb-8">
             Stay connected with our mission through real-time prayer requests and updates from the field.
           </p>
           <p className="text-xl text-dark leading-relaxed mb-8">
-            We'll send you specific prayer needs, testimonies, and ways you can intercede for the people we're serving in Colombia.
+            Our team will send you specific prayer needs, testimonies, and ways you can intercede for the people we're serving in Colombia - all sent live from the field so our church family can be praying with us while we're there.
           </p>
           <div className="flex flex-col sm:flex-row gap-6 justify-center">
             <button 
@@ .. @@
           <p className="text-xl text-dark leading-relaxed mb-8">
             Your financial partnership makes this mission possible. Every dollar goes directly toward reaching the unreached people groups of Colombia.
           </p>
+          <p className="text-lg text-dark leading-relaxed mb-8 font-medium">
+            All donations are tax-deductible through City Church Conway.
+          </p>
           <div className="space-y-6">
             <div className="bg-white p-6 rounded-lg shadow-md">
               <h3 className="text-2xl font-semibold text-brown mb-4">Online Giving</h3>
               <p className="text-dark mb-4">
-                Give securely online through our church's giving platform:
+                Give securely online through our church's giving platform (tax-deductible):
               </p>
               <a 
                 href="https://pushpay.com/g/citychurchconway?src=hpp" 
@@ -1068,18 +1118,6 @@ const App = () => {
                 Give Online
               </a>
             </div>
}
-            <div className="bg-white p-6 rounded-lg shadow-md">
-              <h3 className="text-2xl font-semibold text-brown mb-4">CashApp</h3>
-              <p className="text-dark mb-4">
-                You can also give directly via CashApp:
-              </p>
-              <div className="bg-sage/10 p-4 rounded-lg">
-                <p className="text-lg font-semibold text-sage text-center">
-                  $PrayAndPourColombia
-                </p>
           </div>
         </div>
       </div>
@@ .. @@
         {
           name: "Carijona",
           image: "/images/carijona.jpg",
         }
-          videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
+          videoUrl: "https://youtube.com/shorts/Qo59Igx1qRM?feature=share",
           description: "The Carijona people live in the Amazon rainforest region of Colombia. They have maintained their traditional way of life while facing modern challenges.",
           population: "~500",
           language: "Carijona",