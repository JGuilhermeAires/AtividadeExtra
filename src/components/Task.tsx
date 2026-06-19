import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';

interface TaskProps {
  text: string;
  updateMode: () => void;
  deleteTask: () => void;
}

const Task: React.FC<TaskProps> = ({ text, updateMode, deleteTask }) => {
  return (
    // REQUISITOS: Fundo branco (bg-white), bordas arredondadas (rounded-md), 
    // leve sombra (shadow-sm), padding (py-6 px-8), flex-row e justify-between.
    <View className="flex-row items-center justify-between bg-white py-6 px-8 rounded-md mt-4 shadow-sm border border-gray-100">
      
      {/* Texto com flex-1 para não empurrar os ícones para fora da tela */}
      <Text className="text-gray-800 text-base flex-1 font-medium">
        {text}
      </Text>
      
      {/* Container dos ícones alinhados em linha */}
      <View className="flex-row gap-4 ml-4">
        <TouchableOpacity onPress={updateMode}>
          {/* Alterado color para #333 para dar contraste no fundo branco */}
          <Feather name="edit" size={20} color="#333" className="p-[2px]" />
        </TouchableOpacity>
        <TouchableOpacity onPress={deleteTask}>
          {/* Alterado color para #ef4444 (vermelho do Tailwind) para o botão deletar destacar */}
          <AntDesign name="delete" size={20} color="#ef4444" className="p-[2px]" />
        </TouchableOpacity>
      </View>

    </View>
  );
};

// O StyleSheet foi completamente removido!
export default Task;