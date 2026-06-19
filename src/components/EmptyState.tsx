import React from 'react';
import { View } from 'react-native';

// @ts-ignore
import { Heading } from '../../components/ui/heading';

// @ts-ignore
import { Text } from '../../components/ui/text';

export default function EmptyState() {
  return (
    <View className="flex-1 items-center justify-center py-12 px-4 mt-8 bg-white rounded-xl shadow-sm border border-gray-100">
      {/* Ícone ou Ilustração Simples em Emoji */}
      <View className="bg-gray-100 p-4 rounded-full mb-4">
        <Text className="text-4xl">🚀</Text>
      </View>

      {/* Título usando o Heading do Gluestack-UI */}
      <Heading size="md" className="text-gray-800 font-bold text-center mb-1">
        Sua lista está limpa!
      </Heading>

      {/* Subtítulo usando o Text do Gluestack-UI */}
      <Text size="sm" className="text-gray-500 text-center max-w-[250px]">
        Toque em "Nova Tarefa" para começar a organizar o seu dia produtivo.
      </Text>
    </View>
  );
}